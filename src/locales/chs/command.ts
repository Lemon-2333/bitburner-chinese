export default {
    test:"测试",
    alias:{
        set:"已设置别名",
        set_g:"已全局设置别名",
        error:'alias 使用错误，正确的用法:alias [-g] [aliasname="value"]'
    },
    analyze:{
        error:"analyze 使用错误. 正确用法: analyze",
        start:"分析系统中 ...",
        finish_NUKE:"NUKE 所需的开放端口数: ",
        finish_name:"组织名称: ",
        finish_root:"Root 权限: ",
        finish_run:"可以在该主机上运行脚本: ",
        finish_backdoor:"后门: ",
        finish_skill:"hack() 和后门所需的黑客技能: ",
        finish_security:"服务器安全等级: ",
        finish_chance:"hack概率: ",
        finish_time:"hack所花费的时间: ",
        finish_money:"服务器上可用的总资金:"
    },
    backdoor:{
        error:{
            usage:"backdoor 使用错误. 用法: backdoor",
            normal:"只能后门正常服务器",
            self:"不能在自己的机器上使用后门！您当前连接到您的家用 PC 或您购买的服务器之一",
            admin:"您没有此机器的管理员权限！不能后门",
            skill:"你的黑客技术不够高，无法在这台机器上使用后门。尝试分析机器以确定所需的黑客技能",
            type:"不能在此类服务器上使用后门",
            kind:"不能对这种服务器进行后门",
            normal_n:"服务器应该是普通服务器"
        },
        finish:{
            a:"成功创建后门,在：",
            b:""
        }
    },
    buy:{
        error:{
            connect:"您需要能够连接到暗网才能使用购买命令.(也许你可以在某处购买 TOR 路由器)",
            usage:"参数数量不正确. 用法: ",
            unrecognized:"无法识别的项目: ",
            has:{
                a:"你已经拥有 ",
                b:"程序了"
            },
            money:"没有足够的钱购买 ",
            all:"所有可用的程序都已购买.",
            money_n:{
                a:"没有足够的钱购买剩余的程序, ",
                b:" "
            },
        },
        finish:{
            a:"你已购买 ",
            b:" 程序. 新程序可以在您的家用计算机上找到."
        },
    },
    cat:{
        error:{
            usage:"cat 使用错误. 用法: cat [file]",
            file:"只能使用 cat 查看 .msg、.txt、.lit、.script 和 .js 文件（文件名必须以 .msg、.txt、.lit、.script 或 .js 结尾）",
            lit:".lit 文件不应是 .msg",
            no:"没有那个文件 "
        },
    },
    cd:{
        error:{
            usage:"参数数量不正确。用法: cd [目录]",
            no:"路径无效。更改目录失败"
        }
    },
   };
   //i18n.t('alias.set_g', { ns: 'command' })