export default {
    test:"test",
    alias:{
        set:"Set alias",
        set_g:"Set global alias",
        error:'Incorrect usage of alias command. Usage: alias [-g] [aliasname="value"]'
    },
    analyze:{
        error:"Incorrect usage of analyze command. Usage: analyze",
        start:"Analyzing system ...",
        finish_NUKE:"Required number of open ports for NUKE: ",
        finish_name:"Organization name: ",
        finish_root:"Root Access: ",
        finish_run:"Can run scripts on this host: ",
        finish_backdoor:"Backdoor: ",
        finish_skill:"Required hacking skill for hack() and backdoor: ",
        finish_security:"Server security level: ",
        finish_chance:"Chance to hack: ",
        finish_time:"Time to hack: ",
        finish_money:"Total money available on server:"
    },
    backdoor:{
        error:{
            usage:"Incorrect usage of backdoor command. Usage: backdoor",
            normal:"Can only backdoor normal servers",
            self:"Cannot use backdoor on your own machines! You are currently connected to your home PC or one of your purchased servers",
            admin:"You do not have admin rights for this machine! Cannot backdoor",
            skill:"Your hacking skill is not high enough to use backdoor on this machine. Try analyzing the machine to determine the required hacking skill",
            type:"Cannot use backdoor on this type of Server",
            kind:"Cannot backdoor this kind of server",
            normal_n:"server should be normal server"
        },
        finish:{
            a:"Backdoor on ",
            b:"successful!"
        }
    },
    buy:{
        error:{
            connect:"You need to be able to connect to the Dark Web to use the buy command. (Maybe there's a TOR router you can buy somewhere)",
            usage:"Incorrect number of arguments. Usage: ",
            unrecognized:"Unrecognized item: ",
            has:{
                a:"You already have the ",
                b:"program"
            },
            money:"Not enough money to purchase ",
            all:"All available programs have been purchased already.",
            money_n:{
                a:"Not enough money to purchase remaining programs, ",
                b:" required"
            },
        },
        finish:{
            a:"You have purchased the ",
            b:" program. The new program can be found on your home computer."
        },
    },
    cat:{
        error:{
            usage:"Incorrect usage of cat command. Usage: cat [file]",
            file:"Only .msg, .txt, .lit, .script and .js files are viewable with cat (filename must end with .msg, .txt, .lit, .script or .js)",
            lit:".lit file should not be a .msg",
            no:"No such file "
        },
    },
    cd:{
        error:{
            usage:"Incorrect number of arguments. Usage: cd [dir]",
            no:"Invalid path. Failed to change directories"
        }
    },
   };
   //i18n.t('alias.set_g', { ns: 'command' }
