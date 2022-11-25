export default {
    NukeProgram:{
        tooltip:"This virus is used to gain root access to a machine if enough ports are opened.",
        error:"Cannot nuke this kind of server.",
        a:"You already have root access to this computer. There is no reason to run NUKE.exe",
        b:"You can now run scripts on this server.",
        c:"NUKE unsuccessful. Not enough ports have been opened",
        d:"NUKE successful! Gained root access to "
    },
    BruteSSHProgram:{
        tooltip:"This program executes a brute force attack that opens SSH ports",
        error:"Cannot run BruteSSH.exe on this kind of server.",
        a:"SSH Port (22) is already open!",
        b:"Opened SSH Port(22)!"
    },
    FTPCrackProgram:{
        tooltip:"This program cracks open FTP ports",
        error:"Cannot run FTPCrack.exe on this kind of server.",
        a:"FTP Port (21) is already open!",
        b:"Opened FTP Port (21)!"
    },
    RelaySMTPProgram:{
        tooltip:"This program opens SMTP ports by redirecting data",
        error:"Cannot run relaySMTP.exe on this kind of server.",
        a:"SMTP Port (25) is already open!",
        b:"Opened SMTP Port (25)!"
    },
    HTTPWormProgram:{
        tooltip:"This virus opens up HTTP ports",
        error:"Cannot run HTTPWorm.exe on this kind of server.",
        a:"HTTP Port (80) is already open!",
        b:"Opened HTTP Port (80)!",
    },
    SQLInjectProgram:{
        tooltip:"This virus opens SQL ports",
        error:"Cannot run SQLInject.exe on this kind of server.",
        a:"SQL Port (1433) is already open!",
        b:"Opened SQL Port (1433)!"
    },
    DeepscanV1:{
        tooltip:"This program allows you to use the scan-analyze command with a depth up to 5",
        a:"This executable cannot be run.",
        b:"DeepscanV1.exe lets you run 'scan-analyze' with a depth up to 5.",
    },
    DeepscanV2:{
        tooltip:"This program allows you to use the scan-analyze command with a depth up to 10",
        a:"This executable cannot be run.",
        b:"DeepscanV1.exe lets you run 'scan-analyze' with a depth up to 10.",
    },
    ServerProfiler:{
        tooltip:"This program is used to display hacking and Netscript-related information about servers",
        error:"Must pass a server hostname or IP as an argument for ServerProfiler.exe",
        error_a:"Invalid server IP/hostname",
        error_b:"ServerProfiler.exe can only be run on normal servers.",
        a:"Server base security level: ",
        b:"Server current security level: ",
        c:"Server growth rate: ",
        d:"Netscript hack() execution time: ",
        e:"Netscript grow() execution time: ",
        f:"Netscript weaken() execution time: ",
    },
    AutoLink:{
        tooltip:"This program allows you to directly connect to other servers through the 'scan-analyze' command",
        a:"This executable cannot be run.",
        b:"AutoLink.exe lets you automatically connect to other servers when using 'scan-analyze'.",
        c:"When using scan-analyze, click on a server's hostname to connect to it.",
    },
    Formulas:{
        tooltip:"This program allows you to use the formulas API",
        a:"This executable cannot be run.",
        b:"Formulas.exe lets you use the formulas API.",
    },
    BitFlume:{
        tooltip:"This program creates a portal to the BitNode Nexus (allows you to restart and switch BitNodes)",
    },
    Flight:{
        a:"Augmentations:",
        b:"Money:",
        c:"Hacking skill:",
        d:"We will contact you.",
    },
   };

   //{i18n.t('NukeProgram.tooltip',{ns:'program'})}