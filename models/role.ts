
class RoleAccessConfig {
    // định nghĩa 3 quyền cơ bản cho 1 chức năng nào đó của hệ thống : toàn quyền, sửa hoặc chỉ đọc.
    public static admin = 0;
    public static write = 1;
    public static read = 2;
    public static not_access = -1;
}
class RoleFeature {
    // id: string;
    // name: string; // chức năng tên gì ?? ( )
    // accessRole: number;
}