export interface Project {
    title: string;
    description: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        title: "Remote Command Execution",
        description: "Built a reverse shell payload and listener to replicate attacker post-exploitation behavior during Red Team simulations.",
        tags: ["Python", "TCP", "Windows/Linux"]
    },
    {
        title: "Active Directory Lab",
        description: "Deployed a full Windows AD lab with 25+ users and executed Kerberoasting and privilege escalation attacks.",
        tags: ["Active Directory", "BloodHound", "Kali"]
    },
    {
        title: "AWS Cloud Security",
        description: "Built a secure AWS setup with least-privilege IAM and integrated GuardDuty/CloudTrail into Wazuh SIEM.",
        tags: ["AWS", "Wazuh SIEM", "GuardDuty"]
    }
];
