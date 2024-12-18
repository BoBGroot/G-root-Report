
const data = {
    targetedResourceDetail: {
        Minifilter: "A minifilter is a type of kernel-mode driver in Windows that simplifies the development of file system filter drivers. It intercepts and modifies I/O requests targeted at a file system or another filter driver, enabling tasks like antivirus scanning, encryption, and access control before the requests reach their destination.",
        PreviousMode: "An execution mode indicator found in Kernel Processor Control Region (KPCR), PreviousMode specifies whether the last transition into kernel mode originated from user mode (value 1) or kernel mode (value 0). It helps enforce security by differentiating the origin of a system request, guiding access checks and privilege enforcement mechanisms.",
        ObRegisterCallbacks: "A kernel function that allows drivers to register callback routines for object handle operations. When a process creates, duplicates, or closes a handle to a specific object type, the registered callbacks are invoked, allowing for object access monitoring and control.",
        PsCallbacks: "This refers to a set of kernel mechanisms, including PsSetCreateProcessNotifyRoutine, PsSetCreateThreadNotifyRoutine, and PsSetLoadImageNotifyRoutine, that enables drivers to register routines that are called when processes, threads are created, or images are loaded. These callbacks are often used for security monitoring and system event auditing.",
        Token: "A kernel object that represents the security context of a process or thread. It contains information about a user's identity and privileges, such as user SIDs, group memberships, and assigned privileges, dictating access rights to secured resources and operations within the operating system.",
    },
    typeDetail: {
        Dkom: "A stealthy attack technique where malware directly manipulates kernel data structures to alter system behavior or hide malicious activity. By bypassing standard API calls and directly modifying objects, such as process or thread lists, DKOM can effectively conceal the presence of malware from monitoring tools.",
        Lpe: "A type of attack where malware exploits vulnerabilities within the operating system or applications to gain higher privileges than initially granted. By escalating from a limited user context to that of an administrator or the system, the malware can perform actions that were previously restricted, such as installing drivers or modifying critical system settings.",
        TokenSt: "A technique where malware steals the access token of another process, typically one with higher privileges. By impersonating the targeted process using the stolen token, the malware can gain unauthorized access to resources and perform actions with the privileges associated with that token, effectively bypassing access controls.",
    }
}