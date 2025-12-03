export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links?: {
    label: string;
    href: string;
  }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'hedera-contributions',
    title: 'Hedera Hashgraph & Hiero Protocol Contributions',
    description:
      "4 merged pull requests to Hedera's PBJ library and Hiero Consensus Node. Achieved 5.6x performance improvement in DirectBufferedData operations, improved developer experience with better error messages, investigated oneOf field optimization (recommended against due to test failures), and added configurable network topology API.",
    technologies: ['Java', 'Protocol Buffers', 'JMH Benchmarking'],
    links: [
      {
        label: 'View PBJ PRs',
        href: 'https://github.com/hashgraph/pbj/pulls?q=is%3Apr+author%3Akaldun-tech',
      },
      {
        label: 'View Hiero PRs',
        href: 'https://github.com/hiero-ledger/hiero-consensus-node/pulls?q=is%3Apr+author%3Akaldun-tech',
      },
    ],
    featured: true,
  },
  {
    id: 'network-monitor',
    title: 'Blockchain Network Monitor',
    description:
      'Building a comprehensive real-time monitoring tool for Hedera network in Go. Tracks transaction throughput, consensus metrics, network health, and provides time-series analysis of network behavior. This is an active development project demonstrating modern distributed systems patterns.',
    technologies: ['Go', 'PostgreSQL', 'gRPC', 'Protocol Buffers', 'Time-series Analysis'],
    links: [
      { label: 'View repository', href: 'https://github.com/kaldun-tech/hedera-network-monitor' },
    ],
    featured: true,
  },
  {
    id: 'token-vesting',
    title: 'Token Vesting Smart Contract Platform',
    description:
      'Production-ready Solidity platform for managing time-locked token vesting schedules. Supports multiple beneficiaries, configurable vesting periods, cliff implementations, and revocation mechanisms. Built a complete system including smart contracts with comprehensive test coverage, gas optimization (typical 30-50% reductions), web interface for vesting schedule management, and deployment to multiple networks.',
    technologies: ['Solidity', 'Hardhat', 'Go', 'Next.js', 'PostgreSQL', 'Docker'],
    links: [
      {
        label: 'View repository',
        href: 'https://github.com/kaldun-tech/token-vesting-smart-contract',
      },
    ],
    featured: true,
  },
  {
    id: 'pc-parts-tracker',
    title: 'PC Parts Price Tracker',
    description:
      'AWS-native application demonstrating proper serverless patterns and infrastructure-as-code practices. Tracks PC component prices across retailers and sends Discord notifications on price changes. Built to showcase AWS CDK for infrastructure as code, event-driven serverless architecture, proper separation of concerns, type-hinted Python with test coverage, and cost-effective scaling patterns.',
    technologies: [
      'Python',
      'AWS Lambda',
      'DynamoDB',
      'Parameter Store',
      'EventBridge',
      'AWS CDK',
      'Playwright',
    ],
    links: [{ label: 'View repository', href: 'https://github.com/kaldun-tech/pc-parts-scraper' }],
    featured: true,
  },
];
