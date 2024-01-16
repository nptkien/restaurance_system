import api from "./axios";

//===========viet ham get data tu server o day nhe!s=========

//sample
export const getData = async () => {
    await api.get('getxxxxxxxx', {
        validateStatus: function (status) {
            return status == 200;
        }
    });
}