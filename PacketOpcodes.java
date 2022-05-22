package emu.grasscutter.net.packet;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
public class PacketOpcodes {
    public static final int NONE = 0;

public static final int FuckUmiHoMoReq = 114514;
public static final int FuckUmiHoMoRsp = 1919810;

public static final HashSet<Integer> BANNED_PACKETS = new HashSet<Integer>() {{
    add(PacketOpcodes.WindSeedClientNotify);
    add(PacketOpcodes.PlayerLuaShellNotify);
    }};
}
