class DateUtil {
  format(date) {
    date = new Date(date);
    return `${date.getDay()}/${date.getMonth()}/${date.getYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
}

export default new DateUtil();
