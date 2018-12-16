import moment from "moment";
import "moment/locale/ko";

export default {
  methods: {
    transformDateToMomentDate(date) {
      return moment(date).format("YYYY/MM/DD hh:mm");
    }
  }
};
