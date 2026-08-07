import { BlogPost } from '../types';

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    title: "Building Resilient Offline-First Apps with Jetpack Compose & Room",
    excerpt: "How to design transactional WAL databases, asynchronous StateFlow UI streams, and background WorkManager synchronization for zero-downtime mobile applications.",
    date: "August 2026",
    readTime: "6 min read",
    category: "Compose",
    slug: "offline-first-jetpack-compose-room",
    author: "Krutik Khokhara",
    content: `
### Introduction

In modern mobile applications—especially in enterprise Point-of-Sale (POS) or healthcare fields—network connectivity cannot be assumed. Users expect zero latency, instant UI updates, and zero data loss whether they are in a deep basement or an rural farm.

In this article, we explore the **Offline-First Architecture** used in **PetsApp** and **POS V2**.

### Core Architecture Pillars

1. **Single Source of Truth (SSOT)**: The local database (Room) is the only source of truth for the UI layer. The UI never waits for network calls to render state.
2. **Reactive UI Streams**: Room queries return \`Flow<List<T>>\`, emitting fresh data automatically whenever the database mutates.
3. **Background Sync Worker**: \`WorkManager\` queues outbound sync payloads with exponential backoff and network constraints.

\`\`\`kotlin
@Dao
interface OrderDao {
    @Query("SELECT * FROM orders WHERE status = :status ORDER BY timestamp DESC")
    fun getOrdersFlow(status: OrderStatus): Flow<List<OrderEntity>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertOrder(order: OrderEntity)
}
\`\`\`

### Handling Write Conflicts

When multiple devices synchronize offline changes back to the server, timestamp collision or stale overwrites can occur. We utilize **Vector Clocks** combined with optimistic locking columns to detect and resolve concurrent mutations gracefully.
`
  },
  {
    id: "blog-2",
    title: "Designing Agentic RAG Pipelines for Developer Knowledge Systems",
    excerpt: "A deep dive into multi-agent task orchestration, semantic chunking, vector embedding search, and self-correcting prompt loops for codebases.",
    date: "July 2026",
    readTime: "8 min read",
    category: "AI",
    slug: "agentic-rag-developer-knowledge-systems",
    author: "Krutik Khokhara",
    content: `
### The Challenge with Naive RAG

Naive Retrieval-Augmented Generation (RAG) often suffers when querying complex code repositories or nested API specifications. Fixed-size chunking splits function definitions across boundaries, leading to broken context and LLM hallucinations.

### The Agentic Solution

In the **RAG-Learning** project, we introduced an autonomous agent loop that acts as a researcher:

1. **Query Decomposition**: Break user intent into targeted search sub-queries.
2. **Hybrid Retrieval**: Combine BM25 keyword matching with OpenAI vector embeddings.
3. **Citation Verification**: Before returning the response, the agent cross-references generated code snippets against source file line numbers.

\`\`\`python
class AgenticRAGOrchestrator:
    def __init__(self, vector_store, llm_client):
        self.vector_store = vector_store
        self.llm = llm_client

    async def query(self, user_prompt: str) -> RAGResult:
        sub_queries = await self.decompose_query(user_prompt)
        contexts = await self.retrieve_contexts(sub_queries)
        response = await self.synthesize_response(user_prompt, contexts)
        return self.verify_citations(response, contexts)
\`\`\`
`
  },
  {
    id: "blog-3",
    title: "Taming Low-Level USB & Serial Hardware on Android POS Terminals",
    excerpt: "Lessons learned building direct ESC/POS byte-stream printing buffers and USB device discovery drivers for Android self-service kiosks.",
    date: "June 2026",
    readTime: "7 min read",
    category: "Hardware",
    slug: "usb-serial-pos-hardware-android",
    author: "Krutik Khokhara",
    content: `
### Hardware Interop on Android

Connecting thermal receipt printers and barcode scanners to Android hardware requires navigating USB Host API permissions, baud rates, and raw byte-stream protocols.

### ESC/POS Command Buffering

Thermal printers execute commands sent as hex control codes (ESC/POS). Sending commands too fast without checking buffer status causes corrupted prints or missed cuts.

\`\`\`kotlin
class EscPosBufferWriter(private val connection: UsbDeviceConnection, strokeEndpoint: UsbEndpoint) {
    fun printReceipt(receiptBytes: ByteArray) {
        // Chunk into 64-byte USB packets
        receiptBytes.toList().chunked(64).forEach { chunk ->
            connection.bulkTransfer(strokeEndpoint, chunk.toByteArray(), chunk.size, 1000)
        }
    }
}
\`\`\`

By wrapping raw byte writes in a Kotlin Coroutine Mutex actor, we eliminated device contention errors across our kiosk fleet.
`
  }
];
