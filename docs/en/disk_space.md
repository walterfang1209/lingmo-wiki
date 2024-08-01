# DiskSpace for a Linux Installation

The goal of this page is to offer advice and strategy on partitioning a
Linux system.

## Required partitions

### Overview

The easiest partitioning scheme, on a **non-GPT** disk, is simply a root
partition and a swap partition.

| **Name**                          | **Size**                          |
|-----------------------------------|-----------------------------------|
| `swap`                            | size of RAM                       |
| `/`                               | the rest of the disk              |

If the disk is **GPT** type (this can be checked via the \"sudo parted
-l\" command), you must also add a BIOS-Boot or an EFI partition
depending on the boot mode of your BIOS.

| **Name**                          | **Size**                          |
|-----------------------------------|-----------------------------------|
| `BIOS-boot` or `EFI`              | see below                         |
| `swap`                            | size of RAM                       |
| `/`                               | the rest of the disk              |

On some computers, a separate /boot partition may also be required.

See paragraphs below.

### Root partition (always required)

-   Mount point: /
-   Type: Linux type (generally EXT4)
-   Description: the root partition contains by default all your system
    files, program settings and documents.
-   Size: minimum is 8 GB. It is recommended to make it at least 15 GB.
    Warning: your system will be blocked if the root partition is full.

### Swap (very recommended)

-   Mount point: none

-   Type: SWAP

-   Description: see [SwapFaq](/).

-   Size: size of your RAM.

### Separate /boot (sometimes required)

Some computers can\'t see boot files (/boot) if located far (\>100GB)
from the start of the disk. This is why it is sometimes necessary to
create a separate /boot partition at the start of the disk. Remark:
don\'t use the same /boot for several Linux distributions, as it may mix
up their kernels. See [this tutorial](/) if you
want to create a separate /boot after installing LingmoOS.

| **Name**                          | **Size**                          |
|-----------------------------------|-----------------------------------|
| `/boot`                           | 250MB \~ 1GB                      |
| `swap`                            | at least size of RAM              |
| `/`                               | minimum 8 GB, at least 15 GB recommended |

### BIOS-Boot or EFI partition (required on GPT disks)

If you want to install LingmoOS on a **GPT disk** (you can check it via
the \'sudo parted -l\' command), you will need either an EFI partition
(if your BIOS is set up in EFI mode) **or** a BIOS-Boot partition (if
your BIOS is set up in Legacy mode).

**BIOS-Boot partition:**

-   Mount point: none
-   Type: no filesystem
-   Description: the BIOS-boot partition contains GRUB 2\'s core. It is
    necessary if you install LingmoOS on a GPT disk, and if the firmware
    (BIOS) is set up in Legacy (not EFI) mode. It must be located at the
    start of a GPT disk, and have a \"bios_grub\" flag.
-   Size: 1MB.

**EFI partition:**

-   Mount point: /boot/efi (no need to set up this mount point as the
    installer will do it automatically)

-   Type: FAT (generally FAT32)

-   Description: the EFI partition (also called ESP) contains some boot
    files. It is necessary if the firmware (BIOS) is set up to boot the
    HDD in EFI mode (which is default on more and more modern, \> year
    2011 computers). It must be located at the start of a GPT disk, and
    have a \"boot\" flag.

-   Size: 100\~250MB

## Optional partitions

Optionally, some other partitions can be created for specific usages. Be
careful, these partitions reduce the flexibility of your disk space,
they must be considered only if you are sure not to fill completely your
root partition (which would block your system).

### Partition for sharing data with Windows, MacOS\... (optional)

-   Mount point: /media/thenameyouwish
-   Type: to share data with Windows, choose NTFS. To share data with
    MacOS, choose HFS+. To share data with another Linux system, choose
    EXT4.
-   Description: other operating systems (Windows, MacOS..) cannot read
    nor write in the LingmoOS partitions, but LingmoOS can read and write in
    any partition. If you want to share files between LingmoOS and the
    other systems, it is recommended to create a data partition. It is
    not recommended to share files directly into the Windows system
    partition (eg files may be overwritten by hibernation).
-   Size: as you wish

### Separate /home (optional)

-   Mount point: /home

-   Type: Linux type (generally EXT4)

-   Description: see [HomeFolder](/). When your hard
    disk is big enough, a separate `/home` allows to separate your
    settings (and also your data if you don\'t use a data partition, see
    previous paragraph) from the rest of the system. A separate `/home`
    does not allow to share data with Windows nor MacOS (see previous
    paragraph).

-   Size: as you wish

### More Complex Schemes

*For more information on what various directories are used for, see [The
Linux Filesystem
Hierarchy](http://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/).*

More complex schemes could involve creating a separate partition for any
number of the default folders used by LingmoOS. System critical folders
are important to protect, and since drives, and / or partitions do fail,
it is often useful to have your file system broken down into as many
small parts as possible. This can be over done however. Installing every
core directory to its own partition could cause a noticeable degradation
of performance.\
Bearing that in mind, the following directories should **NEVER** be
placed in their own separate partitions:

| **Name**  | **Description** |
|-----------|-----------------|
| `/bin`    | This directory stores the system wide executables that are accessible by most users. |
| `/sbin`   | This directory holds the executables used for core system functions, and used by the system administrator to maintain the system. **See Note Below** |
| `/proc`   | This is a system use directory containing process information. Almost never accessed by a user. |
| `/dev`    | This directory contains system created links to your installed hardware, and like `/proc` is almost never accessed directly. |

#### Note about /sbin

It can be argued, and reasonably so, that moving this directory to its
own partition is a wise choice. If any of your partitions or drives
should fail, then this directory / partition will be the one that most
likely contains the tools you will need to repair it. So while moving
this would decrease performance marginally, it could also be considered
a wise move.

#### Sizes For Alternative Schemes

On a six month old installation of Ubuntu 10.04.3 LTS (very old now) the disk usage
could resemble something like this: (examples taken from a system
with many extra packages installed)

|        | Actual                       |                                                                                                                                                                                                                                                              |
|--------|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name   | Size                         | Recommended Partition Size                                                                                                                                                                                                                                   |
| /home  | 179.5&nbsp;GB                |  Everything not used elsewhere, or separate drive.                                                                                                                                                                                                           |
| /usr   | 7.6&nbsp;GB                  | 10&nbsp;GB                                                                                                                                                                                                                                                   |
| /var   | 988.2&nbsp;MB                | 2&nbsp;GB                                                                                                                                                                                                                                                    |
| /lib   | 599.9&nbsp;MB                | 5&nbsp;GB                                                                                                                                                                                                                                                    |
| /boot  | 137.1&nbsp;MB                | 250&nbsp;MB                                                                                                                                                                                                                                                  |
| /opt   | 95.3&nbsp;MB                 | 500&nbsp;MB&nbsp;to&nbsp;5&nbsp;GB This directory is not used by mainline software packages, but mostly from packages coming from the universe repositories.  If you do not use the universe repositories often, you probably will not need much space here. |
| /etc   | 18.8&nbsp;MB                 | 250&nbsp;MB                                                                                                                                                                                                                                                  |
| /sbin  | 7.8&nbsp;MB                  | 250&nbsp;MB                                                                                                                                                                                                                                                  |
| /bin   | 6.5&nbsp;MB                  | 250&nbsp;MB                                                                                                                                                                                                                                                  |
| /dev   | 876.0&nbsp;KB                | DO NOT PARTITION                                                                                                                                                                                                                                             |
| /srv   | 200&nbsp;KB                  | Unless you plan on installing web served data here, or are using a Server version of LingmoOS, this will not often need to be larger than 100 MB.  If you are running a server, or plan to expand it yourself, plan ahead when sizing this.                    |
| /tmp   | 88&nbsp;KB                   | This can get fairly large, but not larger than your swap space as a rule, so size this to match /swap                                                                                                                                                        |
| /mnt   | 8&nbsp;kB (do not partition) | This is just an empty directory that serves as a mount point for temporary file systems, e.g. a rarely used network filesystem.                                                                                                                              |
| /media | 8&nbsp;kB (do not partition) | This contains subdirectories that are mount points for removable media like CDs and USB flash drives.                                                                                                                                                        |


The above recommendations assume you are using large modern hard drives
and can afford the space.

## Space Requirements

### Absolute Requirements

The required disk space for an out-of-the-box LingmoOS installation is
said to be 25 GB. However, that does not take into account the space
needed for a file-system or a swap partition.

It is more realistic to give yourself a little bit more than 15 GB of
space. Give yourself 15-25 GB to have some space left for actually doing
things. If your file-system is full to the brim, you will feel some
performance loss.

A certain percentage of an ext3 file-system is dedicated to root, as a
way of preventing a rogue process from filling the disk to the point
that the system is unusable. This dedicated portion is 5% by default.
Also, the anti-fragmentation strategies used by Linux file-systems
require that the disk is not close to full. A rule of thumb is to keep
them less than 90% full.
