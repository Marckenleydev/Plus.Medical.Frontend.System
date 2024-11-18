export const formateDate = (date: string, config: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }) => {
    const options = config;
    return new Date(date).toLocaleDateString('en-US', options);
}
