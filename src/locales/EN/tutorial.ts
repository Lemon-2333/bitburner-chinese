export default {
    tutorial: {
        error:"Bad command. Please follow the tutorial",
        error_a:"Please follow the tutorial, or click 'EXIT' if you'd like to skip it",
        welcome: {
            a: "Welcome to Bitburner, a cyberpunk-themed incremental RPG! The game takes place in a dark, dystopian future... The year is 2077...",
            b: "This tutorial will show you the basics of the game. You may skip the tutorial at any time.",
            c: "You can also collapse this panel to temporarily hide this tutorial."
        },
        NSSelection: {
            a: "The tutorial will adjust to your programming ability.",
            b: "Bitburner has 2 types of scripts:",
            c: "NS1: Javascript from 2009, very simple. Recommended for beginners to programming.",
            d: "NS2: Native, modern Javascript. Recommended if you know any programming language or are serious about learning programming.",
            e: "Both are available at all time and interchangeably. This choice is only for the tutorial.",
            NS1: "Use NS1",
            NS2: "Use NS2",
            info: "More info"
        },
        GoToCharacterPage: {
            a: "Let's start by heading to the Stats page. Click",
            // b:"Stats", now on ui
            c: "on the main navigation menu (left-hand side of the screen)",
            d: "shows a lot of important information about your progress, such as your skills, money, and bonuses."
        },
        CharacterGoToTerminalPage: {
            a: "Let's head to your computer's terminal by clicking",
            //b:"Terminal", it is on ui
            c: "on the main navigation menu.",
        },
        TerminalIntro: {
            a: "is used to interface with your home computer as well as all of the other machines around the world."
        },
        TerminalHelp: {
            a: "Let's try it out. Start by entering",
            b: "(Don't forget to press Enter after typing the command)",
        },
        TerminalLs: {
            a: "displays a list of all available Terminal commands, how to use them, and a description of what they do.",
            b: "Let's try another command. Enter"
        },
        TerminalScan: {
            a: "is a basic command that shows files on the computer. Right now, it shows that you have a program called",
            b: "NUKE.exe on your computer. We'll get to what this does later.",
            c: "Using your home computer's terminal, you can connect to other machines throughout the world. Let's do that now by first entering",
        },
        TerminalScanAnalyze1: {
            a: "shows all available network connections. In other words, it displays a list of all servers that can be connected to from your current machine. A server is identified by its hostname. ",
            b: "That's great and all, but there's so many servers. Which one should you go to?",
            c: "gives some more detailed information about servers on the network. Try it now!"
        },
        TerminalScanAnalyze2: {
            a: "shows more detailed information about each server that you can connect to (servers that are a distance of one node away). ",
            b: " It is also possible to run scan-analyze with a higher depth. Let's try a depth of two with the following command:",
        },
        TerminalConnect: {
            a: "Now you can see information about all servers that are up to two nodes away, as well as figure out how to navigate to those servers through the network. You can only connect to a server that is one node away. To connect to a machine, use",
            b: "From the results of ",
            c: "we can see that the n00dles server is only one node away. Let's connect to it now using:",
        },
        TerminalAnalyze: {
            a: "You are now connected to another machine! What can you do now? You can hack it!",
            b: " In the year 2077, currency has become digital and decentralized. People and corporations store their money on servers and computers. Using your hacking abilities, you can hack servers to steal money and gain experience. ",
            c: "Before you try to hack a server, you should run diagnostics using",
        },
        TerminalNuke: {
            a: "When ",
            b: "finishes running it will show useful information about hacking the server. ",
            c: " For this server, the required hacking skill is only 1, which means you can hack it right now.However, in order to hack a server you must first gain root access. The NUKE.exe program that we saw earlier on your home computer is a virus that will grant you root access to a machine if there are enough open ports.",
            d: "shows that there do not need to be any open ports on this machine for the NUKE virus to work, so go ahead and run the virus using"
        },
        TerminalManualHack: {
            a: "You now have root access! You can hack the server using",
            b: " Try doing that now.",
        },
        TerminalHackingMechanics: {
            a: "You are now attempting to hack the server. Performing a hack takes time and only has a certain percentage chance of success. This time and success chance is determined by a variety of factors, including your hacking skill and the server's security level.",
            b: "If your attempt to hack the server is successful, you will steal a certain percentage of the server's total money. This percentage is affected by your hacking skill and the server's security level.",
            c: "The amount of money on a server is not limitless. So, if you constantly hack a server and deplete its money,then you will encounter diminishing returns in your hacking. You will need to use",
            d: "which tricks the company into adding money to their server and",
            e: "which increases the speed of hack and grow.",
        },
        TerminalGoHome: {
            a: "From any server you can get back home using",
            b: "Let's head home before creating our first script!",
        },
        TerminalCreateScript: {
            a: "Hacking is the core mechanic of the game and is necessary for progressing. However, you don't want to be hacking manually the entire time. You can automate your hacking by writing scripts!",
            b: "To create a new script or edit an existing one, you can use",
            c: "Scripts must end with the",
            e:" extension. Let's make a script now by entering",
            d: "after the hack command finishes running (Sidenote: Pressing ctrl + c will end a command like hack early)",
        },
        TerminalTypeScript: {
            a: "This is the script editor. You can use it to program your scripts.",
            b: "Scripts are written in a simplified version of javascript.",
            c: " Copy and paste the following code into the script editor: ",
            d: "For anyone with basic programming experience, this code should be straightforward. This script will continuously hack the n00dles server.",
            e: "To save and close the script editor, press the button in the bottom left, or press ctrl + s then ctrl + b.",
        },
        TerminalFree: {
            a: "Now we'll run the script. Scripts require a certain amount of RAM to run, and can be run on any machine which you have root access to. Different servers have different amounts of RAM. You can also purchase more RAM for your home server.",
            b: "To check how much RAM is available on this machine, enter",
        },
        TerminalRunScript: {
            a: "We have 4GB of free RAM on this machine, which is enough to run our script. Let's run our script using",
        },
        TerminalGoToActiveScriptsPage: {
            a: "Your script is now running! It will continuously run in the background and will automatically stop if the code ever completes (the ",
            b: " will never complete because it runs an infinite loop). ",
            c: "These scripts can passively earn you income and hacking experience. Your scripts will also earn money and experience while you are offline, although at a slightly slower rate. ",
            d: "Let's check out some statistics for our running scripts by clicking",
        },
        ActiveScriptsPage: {
            a: "This page displays information about all of your scripts that are running across every server. You can use this to gauge how well your scripts are doing. Let's go back to",
        },
        ActiveScriptsToTerminal: {
            a: "One last thing about scripts, each active script contains logs that detail what it's doing. We can check these logs using the tail command. Do that now for the script we just ran by typing",
        },
        TerminalTailScript: {
            a: "The log for this script won't show much right now (it might show nothing at all) because it just started running...but check back again in a few minutes! ",
            b: "This covers the basics of hacking. To learn more about writing scripts, select",
            c: "in the main navigation menu to look at the documentation.",
            d: "For now, let's move on to something else!"
        },
        GoToHacknetNodesPage: {
            a: "Hacking is not the only way to earn money. One other way to passively earn money is by purchasing and upgrading Hacknet Nodes. Let's go to",
        },
        HacknetNodesIntroduction: {
            a: "Here you can purchase new Hacknet Nodes and upgrade your existing ones. Let's purchase a new one now.",
        },
        HacknetNodesGoToWorldPage: {
            a: "You just purchased a Hacknet Node! This Hacknet Node will passively earn you money over time, both online and offline. When you get enough money, you can upgrade your newly-purchased Hacknet Node below.",
            b: "Let's go to",
        },
        WorldDescription: {
            a: "This page lists all of the different locations you can currently travel to. Each location has something that you can do. There's a lot of content out in the world, make sure you explore and discover!",
            b: "Lastly, click on",
        },
        TutorialPageInfo: {
            a: "This page contains a lot of different documentation about the game's content and mechanics. I know it's a lot, but I highly suggest you read (or at least skim) through this before you start playing . That's the end of the tutorial. Hope you enjoy the game!",
        },
        gl: {
            a: "SKIP TUTORIAL",
            b: "FINISH TUTORIAL",
        },
    }
};

//i18n.t('tutorial.welcome.a',{ns:"tutorial"})