import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";
import { appointmentAPI } from "../services/Appointment";
import { patientAPI } from "../services/PatientService";
import { toastError } from "../services/ToastService";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const timeSlots = [
  "08:00 AM - 09:00 AM",
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
];
const SidePanel = ({ doctorData }) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState("");
  const { data: user, error, isLoading, refetch } = patientAPI.useFetchPatientQuery();

  console.log(user?.data.patient.firstName )
  const handleTimeSlotClick = (slot) => {
    setSelectedTimeSlot(slot);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const { userId } = doctorData?.data?.doctor ?? {};

  const [bookAppointment, {isLoading:loadingAppointment, isSuccess }] = appointmentAPI.useBookAppointmentMutation();

  const handleAppointment = async () => {
    if (!user?.data.patient) {
      toastError("Please login");
      return;
    }
    if (date && selectedTimeSlot) {
      const [startHour] = selectedTimeSlot.split(" - ")[0].split(" ");
      const localDateTime = new Date(date);
      const [hour, minute] = startHour.split(":");
      localDateTime.setHours(parseInt(hour));
      localDateTime.setMinutes(parseInt(minute));

      const isoDateTime = localDateTime.toISOString().split(".")[0]; // Format as YYYY-MM-DDTHH:mm:ss
      await bookAppointment({userId, localDateTime: isoDateTime });
    }
  };

  React.useEffect(() => handleClose(), [isSuccess]);


  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-[500]  text-headingColor">Exceptional Care. Completely Free of Charge
        </p>
       
      </div>
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>

        <React.Fragment>
          <Button
            style={{
              marginTop:"16px",
              padding: "9px 1px",
              color:"#FFFFFF",
              // borderColor: "#0067FF",
              width:"100%",
              backgroundColor:"#0067FF"
            }}
           variant="outlined" onClick={handleClickOpen}>
            Book Appointment
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle
              style={{
               
                fontSize: "18px",
                fontWeight: "bold",
              }}
              sx={{ m: 0, p: 2 }}
              id="customized-dialog-title"
            >
              Book Appointment
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      border: "1px solid #2196f3",
                      borderRadius: "8px",
                      padding: "16px",
                      display: "inline-block",
                    }}
                  >
                    <DateCalendar />
                  </Box>
                  <Box>
                    <Typography
                      style={{ fontSize: "18px" }}
                      variant="h6"
                      gutterBottom
                    >
                      Select Time Slot
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      {timeSlots.map((slot, index) => (
                        <Button
                        // sx={{backgroundColor:"#0067FF"}}
                          key={index}
                          variant={
                            selectedTimeSlot === slot ? "contained" : "outlined"
                          }
                          color="primary"
                          onClick={() => handleTimeSlotClick(slot)}
                        >
                          {slot}
                        </Button>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </LocalizationProvider>
            </DialogContent>
            <DialogActions>
              <Button
                sx={{
                  color: "#e53935",
                  borderColor: "#e53935",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderRadius: "18px",
                  padding: "6px 16px",
                }}
                autoFocus
                onClick={handleClose}
              >
                Close
              </Button>

              <Button
                style={{
                  color: "white",
                  backgroundColor: "#1976d2",
                  marginLeft: 16,
                  marginRight: 8,
                  borderRadius: "18px",
                  padding: "6px 16px",
                }}
                autoFocus
                // onClick={handleClose}
                onClick={handleAppointment}
              >
              {loadingAppointment ? "Processing...": " Submit"} 
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </React.Fragment>
      </div>
      {/* <button className="btn px-2 w-full rounded-md">Book Appointment</button> */}
    </div>
  );
};

export default SidePanel;
