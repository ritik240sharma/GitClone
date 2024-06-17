function Timestamp(timestamp)
{
    let date = new Date(timestamp);
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' };
    let formatted_date = date.toLocaleString('en-US', options);
    return formatted_date
}

export default Timestamp