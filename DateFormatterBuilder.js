class DateFormatterBuilder {
  constructor() {}
  
  constructor(formatters) {}
  
  year() {
    // TODO
    return this;
  }
  
  month() {
    // TODO
    return this;
  }
  
  day() {
    return dayOfMonth();
  }
  
  dayOfMonth() {
    // TODO
    return this;
  }
  
  weekday(f) {
    // TODO
    return this;
  }
  
  dayOfYear() {
    // TODO
    return this;
  }
  
  build() {
    // TODO
    return {};
  }
  
  format(obj) {
    return build().format(obj);
  }
  
  literal(v) {
    // TODO
    return this;
  }
}
