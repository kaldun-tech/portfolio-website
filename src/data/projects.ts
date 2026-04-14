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
    id: 'grpc-rest-benchmark',
    title: 'gRPC vs REST Performance Benchmark',
    description:
      'Rigorous protocol performance analysis for Hedera-style financial infrastructure. Found gRPC delivers 17-18% higher throughput and 22% better tail latency at 50+ concurrent workers, but REST actually wins at low concurrency. Multi-language clients (Go, Rust, Python) isolate transport overhead from SDK costs. Includes real Hedera testnet validation showing rate limiting and network latency dominate protocol choice at the network layer.',
    technologies: ['Go', 'Rust', 'Python', 'gRPC', 'Protocol Buffers', 'PostgreSQL'],
    links: [
      {
        label: 'View repository',
        href: 'https://github.com/kaldun-tech/grpc-rest-benchmark',
      },
      {
        label: 'Read the analysis',
        href: 'https://taraskaldun.substack.com/p/when-does-grpc-actually-beat-rest',
      },
    ],
    featured: true,
  },
  {
    id: 'hiero-hcs-replay',
    title: 'Hiero HCS Replay Library',
    description:
      'Go library that captures real message timing from Hedera Consensus Service topics and replays them for realistic load testing. Solves the problem that synthetic load generators miss the bursty traffic patterns that cause production failures. Zero external dependencies, 91.7% test coverage, MIT licensed. Built for the Hiero Apex Hackathon with on-chain proof of functionality.',
    technologies: ['Go', 'Hedera Mirror Node API', 'HCS'],
    links: [
      {
        label: 'View library',
        href: 'https://github.com/kaldun-tech/hiero-hcs-replay',
      },
      {
        label: 'View demo',
        href: 'https://github.com/kaldun-tech/hiero-hcs-replay-demo',
      },
      {
        label: 'On-chain proof',
        href: 'https://hashscan.io/testnet/topic/0.0.8098128',
      },
    ],
    featured: true,
  },
  {
    id: 'dune-hedera-dashboard',
    title: 'Hedera Network Analytics Dashboard',
    description:
      'ETL pipeline and Dune Analytics dashboard for Hedera network metrics. Built because Dune lacks native Hedera tables. Iterated from batch processing to streaming architecture, reducing memory from 8GB to 500MB and runtime from 20+ hours to minutes. Runs daily via GitHub Actions, visualizing transaction volume, type breakdown, active accounts, and fee trends.',
    technologies: ['Python', 'Dune Analytics', 'Hedera Mirror Node API', 'GitHub Actions'],
    links: [
      {
        label: 'View dashboard',
        href: 'https://dune.com/tsmereka_team_70e514cb/hedera-daily-transaction-volume',
      },
      {
        label: 'View repository',
        href: 'https://github.com/kaldun-tech/dune-hedera-dashboard',
      },
      {
        label: 'Read the writeup',
        href: 'https://taraskaldun.substack.com/p/building-a-hedera-network-health',
      },
    ],
    featured: true,
  },
  {
    id: 'hedera-contributions',
    title: 'Hedera Hashgraph & Hiero Protocol Contributions',
    description:
      "6 merged pull requests across Hedera's PBJ library, Hiero Consensus Node, and Hiero SDK. Achieved 5.6x performance improvement in DirectBufferedData operations, fixed TLS session resumption security vulnerability in the Go SDK, improved developer experience with better error messages and testing documentation, and added configurable network topology API.",
    technologies: ['Java', 'Go', 'Protocol Buffers', 'JMH Benchmarking'],
    links: [
      {
        label: 'View PBJ PRs',
        href: 'https://github.com/hashgraph/pbj/pulls?q=is%3Apr+author%3Akaldun-tech',
      },
      {
        label: 'View Hiero PRs',
        href: 'https://github.com/hiero-ledger/hiero-consensus-node/pulls?q=is%3Apr+author%3Akaldun-tech',
      },
      {
        label: 'View SDK PRs',
        href: 'https://github.com/hiero-ledger/hiero-sdk-go/pulls?q=is%3Apr+author%3Akaldun-tech',
      },
    ],
    featured: true,
  },
  {
    id: 'network-monitor',
    title: 'Hedera Network Monitor',
    description:
      'Real-time monitoring tool for Hedera network health built in Go. Dual-interface design with REST API and CLI (Cobra). Tracks account balances, network metrics, and sends webhook alerts on configurable thresholds. Integrates with Hedera SDK for direct network queries.',
    technologies: ['Go', 'REST API', 'CLI', 'Hedera SDK', 'Webhooks'],
    links: [
      { label: 'View repository', href: 'https://github.com/kaldun-tech/hedera-network-monitor' },
    ],
    featured: true,
  },
  {
    id: 'token-vesting',
    title: 'Token Vesting Smart Contract Platform',
    description:
      'Full-stack Web3 platform for managing time-locked token vesting schedules. Solidity contracts with 100% test coverage (52 tests), deployed and verified on Base Sepolia and Hedera Testnet. Includes Next.js dashboard for schedule management, Go backend API with PostgreSQL caching, and CLI tools via Hardhat tasks.',
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
    id: 'aws-infrastructure',
    title: 'AWS Cloud Infrastructure Portfolio',
    description:
      'AWS Solutions Architect Associate with hands-on implementations across 5 architectural POCs: serverless e-commerce, data analytics pipelines (Kinesis → Athena), multi-AZ reliable infrastructure, migration strategies, and disaster recovery. Includes a production backup system implementing 3-2-1-1-0 strategy with intelligent file classification and multi-tier storage (S3 Glacier, Proton Drive, air-gapped local). All projects use CloudFormation IaC and least-privilege IAM.',
    technologies: [
      'Python',
      'AWS Lambda',
      'S3',
      'DynamoDB',
      'Kinesis',
      'Athena',
      'CloudFormation',
      'VPC',
    ],
    links: [
      { label: 'AWS POCs', href: 'https://github.com/kaldun-tech/aws-proof-of-concepts' },
      { label: 'Backup Recovery', href: 'https://github.com/kaldun-tech/backup-recovery' },
      { label: 'Read the journey', href: 'https://taraskaldun.substack.com/p/my-aws-cloud-solutions-architect' },
    ],
    featured: true,
  },
];
