import{_ as e,c as o,o as a,a5 as t}from"./chunks/framework.B9ajF9kL.js";const i="/assets/1.CaXiKDlc.jpg",n="/assets/2.C5w56tx6.jpg",s="/assets/3.wuY9pZwU.jpg",r="/assets/4.Drp9lpO4.jpg",l="/assets/5.CvbZpXkX.jpg",h="/assets/6.BgTbaWPu.jpg",d="/assets/7.D6z0_ULy.jpg",c="/assets/8.B4JOPfLj.jpg",u="/assets/9.DURav4pd.jpg",p="/assets/10.DcsL7dZF.jpg",m="/assets/11.CsTHjoCk.jpg",g="/assets/12.BXIhr9st.jpg",x=JSON.parse('{"title":"User Install Guide for LingmoOS","description":"","frontmatter":{"prev":false,"next":false},"headers":[],"relativePath":"en/Wiki/debian/installation.md","filePath":"en/Wiki/debian/installation.md"}'),y={name:"en/Wiki/debian/installation.md"},b=t('<hr><h2 id="sidebar-position-1" tabindex="-1">sidebar_position: 1 <a class="header-anchor" href="#sidebar-position-1" aria-label="Permalink to &quot;sidebar_position: 1&quot;">​</a></h2><h1 id="user-install-guide-for-lingmoos" tabindex="-1">User Install Guide for LingmoOS <a class="header-anchor" href="#user-install-guide-for-lingmoos" aria-label="Permalink to &quot;User Install Guide for LingmoOS&quot;">​</a></h1><h2 id="warning-lingmo-gnu-linux-comes-with-absolutely-no-warranty-to-the-extent-permitted-by-applicable-law" tabindex="-1">WARNING: Lingmo GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent permitted by applicable law. <a class="header-anchor" href="#warning-lingmo-gnu-linux-comes-with-absolutely-no-warranty-to-the-extent-permitted-by-applicable-law" aria-label="Permalink to &quot;WARNING: Lingmo GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent permitted by applicable law.&quot;">​</a></h2><p>Fast, free and full of new features. The latest release of LingmoOS delivers new tools and enhancements for developers, creators, gamers and administrators.</p><p>Let&#39;s discover <strong>LingmoOS in less than 5 minutes</strong>.</p><p>Please be aware that LingmoOS is in <strong>BETA</strong> - what this means is that LingmoOS is under heavy development and therefore <strong>NOT</strong> ready for every day use.</p><h2 id="_1-overview" tabindex="-1">1. Overview <a class="header-anchor" href="#_1-overview" aria-label="Permalink to &quot;1. Overview&quot;">​</a></h2><h3 id="what-you-ll-learn" tabindex="-1">What you’ll learn <a class="header-anchor" href="#what-you-ll-learn" aria-label="Permalink to &quot;What you’ll learn&quot;">​</a></h3><p>In this tutorial, we will guide you through the steps required to install LingmoOS on your laptop or PC.</p><h3 id="what-you-ll-need" tabindex="-1">What you&#39;ll need <a class="header-anchor" href="#what-you-ll-need" aria-label="Permalink to &quot;What you&#39;ll need&quot;">​</a></h3><ul><li><p>A laptop or PC with at least 25GB of storage space.</p></li><li><p>A flash drive (12GB or above recommended).</p></li></ul><h2 id="_2-download-a-lingmoos-image" tabindex="-1">2. Download a LingmoOS Image <a class="header-anchor" href="#_2-download-a-lingmoos-image" aria-label="Permalink to &quot;2. Download a LingmoOS Image&quot;">​</a></h2><p>You can download a LingmoOS image <a href="https://lingmo.org/download" target="_blank" rel="noreferrer">here</a>. Make sure to save it to a memorable location on your PC! For this tutorial, we will use the LingmoOS 2.0 beta version which uses the new Lingmo installer that will be included in all future LingmoOS releases.</p><p><img src="'+i+'" alt="LingmoOS ISO Download"></p><h2 id="_3-create-a-bootable-usb-stick" tabindex="-1">3. Create a Bootable USB stick <a class="header-anchor" href="#_3-create-a-bootable-usb-stick" aria-label="Permalink to &quot;3. Create a Bootable USB stick&quot;">​</a></h2><p>To install LingmoOS, you need to write your downloaded ISO to a USB stick to create the installation media. This is not the same as copying the ISO, and requires some bespoke software.</p><p>For this tutorial, we’ll use <a href="https://etcher.balena.io/" target="_blank" rel="noreferrer">balenaEtcher</a>, as it runs on Linux, Windows and macOS. Choose the version that corresponds to your current operating system, download and install the tool.</p><p><img src="'+n+'" alt="Download balenaEtcher"></p><p>Select your downloaded ISO, choose your USB flash drive, and then click <code>Flash!</code> to install your image.</p><p><img src="'+s+'" alt="Flash to Disk"></p><h2 id="_4-boot-from-usb-flash-drive" tabindex="-1">4. Boot from USB flash drive <a class="header-anchor" href="#_4-boot-from-usb-flash-drive" aria-label="Permalink to &quot;4. Boot from USB flash drive&quot;">​</a></h2><p>Insert the USB flash drive into the laptop or PC you want to use to install Ubuntu and boot or restart the device. It should recognize the installation media automatically. If not, try holding <code>F12</code> (according to your motherboard manufacturer) during startup and selecting the USB device from the system-specific boot menu.</p><blockquote><p>F12 is the most common key for bringing up your system’s boot menu, but Escape, F2 and F10 are common alternatives. If you’re unsure, look for a brief message when your system starts – this will often inform you of which key to press to bring up the boot menu.</p></blockquote><p>On some older images, you will be required to enter a password to enter the live session. If you enconter this, enter the password <code>live</code> and press <code>Enter</code>.</p><p><img src="'+r+'" alt="Enter password"></p><p>Once logged into the live system, you can start the installer by clicking <code>Install Lingmo</code>.</p><p><img src="'+l+'" alt="Start installer"></p><p>Once the installer has initialised you will be invited to choose your language</p><p><img src="'+h+'" alt="Choose language"></p><blockquote><p>You can preview LingmoOS without making any changes to your PC. You can return to the installer menu at any time by clicking the Install Lingmo shortcut on the desktop.</p></blockquote><p>To proceed, click <code>Next</code>.</p><h2 id="_5-choose-your-location" tabindex="-1">5. Choose your Location <a class="header-anchor" href="#_5-choose-your-location" aria-label="Permalink to &quot;5. Choose your Location&quot;">​</a></h2><p>Select your location and timezone from the map screen and click <code>Next</code>. This information will be detected automatically if you are connected to the internet.</p><p><img src="'+d+'" alt="Choose location"></p><h2 id="_6-choose-your-keyboard-layout" tabindex="-1">6. Choose your Keyboard Layout <a class="header-anchor" href="#_6-choose-your-keyboard-layout" aria-label="Permalink to &quot;6. Choose your Keyboard Layout&quot;">​</a></h2><p>You will be asked to select your keyboard layout. Once you’ve chosen one, click <code>Next</code>.</p><p><img src="'+c+'" alt="Choose keyboard layout"></p><h2 id="_7-choose-your-partitioning" tabindex="-1">7. Choose your Partitioning <a class="header-anchor" href="#_7-choose-your-partitioning" aria-label="Permalink to &quot;7. Choose your Partitioning&quot;">​</a></h2><p>This screen allows you to configure your installation. If you would like LingmoOS to be the only operating system on your hard drive, select <code>Erase disk</code> and install LingmoOS.</p><p>If your device currently has another operating system installed, you will receive additional options to install LingmoOS alongside that OS rather than replacing it.</p><p><img src="'+u+'" alt="Choose partitioning"></p><h3 id="manual" tabindex="-1">Manual <a class="header-anchor" href="#manual" aria-label="Permalink to &quot;Manual&quot;">​</a></h3><p>When using Manual to set up your system as you would like it, keep these thoughts in mind:</p><p>The root ( / ) directory needs at least 25 GBs of space.</p><p>The home ( /home ) directory needs as much space as you will need for your files, music, pictures and documents. So it is best to use the remaining space for the home partition, unless you have going to dual boot.</p><p>Swap space of at least half of the available RAM is recommended. For instance, with 8 GBs, make the swap with at least 4 GBs.</p><blockquote><p>If you have a Windows 8 sticker on your machine you might need to make a separate EFI partition with a FAT32 filesystem.</p></blockquote><h2 id="_8-create-your-login-details" tabindex="-1">8. Create Your Login Details <a class="header-anchor" href="#_8-create-your-login-details" aria-label="Permalink to &quot;8. Create Your Login Details&quot;">​</a></h2><p>On this screen, you will be prompted to enter your name and the name of your computer as it will appear on the network. Finally, you will create a username and a strong password.</p><p>You can choose to log in automatically or require a password. If you are using your device whilst travelling, it’s <strong>not</strong> recommended to keep “Log in automatically” enabled.</p><p><img src="'+p+'" alt="Create your login details"></p><h2 id="_9-confirm-the-installation" tabindex="-1">9. Confirm the Installation <a class="header-anchor" href="#_9-confirm-the-installation" aria-label="Permalink to &quot;9. Confirm the Installation&quot;">​</a></h2><p>You will now be asked to review the settings you have chosen. If you are happy with them, click <code>Install</code>.</p><p><img src="'+m+'" alt="Confirm the installation"></p><p>And then sit back and enjoy the slideshow as LingmoOS installs in the background! 🙂:</p><p><img src="'+g+'" alt="Installation in progress"></p><p>After reboot, you can enter your new system!</p><h2 id="_10-you-ve-installed-lingmoos" tabindex="-1">10. You’ve installed LingmoOS! <a class="header-anchor" href="#_10-you-ve-installed-lingmoos" aria-label="Permalink to &quot;10. You’ve installed LingmoOS!&quot;">​</a></h2><p>Thank you for completing this tutorial. We hope you enjoy your new desktop.</p>',60),f=[b];function w(_,k,v,S,L,O){return a(),o("div",null,f)}const I=e(y,[["render",w]]);export{x as __pageData,I as default};
