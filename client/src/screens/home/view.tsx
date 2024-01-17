import { Text, View, StyleSheet, StyleProp, TextStyle, ScrollView } from "react-native"
import { Badge, ButtonPrimary, Category, PrimaryTextField, SwitchPrimary, Tag } from "../../components";
import { COLORS } from "../../theme/color";
import { useForm } from 'react-hook-form';




function HomeScreen() {
    const { control, register, handleSubmit, formState: { errors } } = useForm({ mode: "onSubmit" });
    //test
    const onSubmit = (data: any) => {
        console.log(data); // Dữ liệu của tất cả các TextInput sau khi submit
        // Thực hiện các thao tác tiếp theo, chẳng hạn gửi dữ liệu đến server, chuyển hướng, vv.
    };
    return <View style={styles.container}>
        <View style={styles.space}></View>
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
                {
                    required: "Username is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid Username"
                    }
                }
            }
            errors={errors}
            showSuffixIcon={true}
        />
        <View style={styles.space}></View>
        <View style={styles.containerSwicth}>
            <SwitchPrimary initValue={true} onValueChange={(v) => { }} />
            <View style={styles.space}></View>
            <SwitchPrimary initValue={false} onValueChange={(v) => { }} />
        </View>
        <View style={styles.space}></View>
        <Tag name="Label Tag" />
        <View style={styles.space}></View>
        <Category name="Label Tag" />
        <Category />

    </View >



}

const styles = StyleSheet.create({
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
    containerSwicth: {
        // flex: 1,
        justifyContent: "center",
        flexDirection: 'row',
    }
});

export default HomeScreen;