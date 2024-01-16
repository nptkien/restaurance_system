import {Text, View, StyleSheet, StyleProp, TextStyle, ScrollView} from "react-native"
import {Badge, ButtonPrimary, PrimaryTextField} from "../../components";
import {COLORS} from "../../theme/color";
import {Control, FieldValues, FieldError, Controller, useForm, Form} from 'react-hook-form';




function HomeView () {
    const {control, register, handleSubmit, formState: {errors}}=useForm({mode: "onSubmit"});
    //test
    const onSubmit=(data: any) => {
        console.log(data); // Dữ liệu của tất cả các TextInput sau khi submit
        // Thực hiện các thao tác tiếp theo, chẳng hạn gửi dữ liệu đến server, chuyển hướng, vv.
    };
    return <View style={styles.container}>
        <ButtonPrimary
            title={"Demo"}
            onPress={handleSubmit(onSubmit)}
            width={"60%"}
        >
        </ButtonPrimary>

        <View style={styles.space}></View>
        <Badge title={"Label"} backgroundColor={COLORS.Primary} />
        <View style={styles.space}></View>
        <PrimaryTextField
            title="Username"
            width={"80%"}
            control={control}
            name="username"
            placeholder="Enter your username"
            rules={
                register("username",
                    {
                        required: "Username is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid Username"
                        }
                    }
                )
            }
            errors={errors}
        />
        <View style={styles.space}></View>


    </View >



}

const styles=StyleSheet.create({
    space: {
        height: 30,
        width: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.White,
    },
});

export default HomeView;