Container Relations Explanation:
1. Frontend Container (React) → API Gateway Container
Purpose: React frontend sends all requests to API Gateway
Communication: HTTP requests from browser
Benefits: Single entry point, centralized routing
2. API Gateway Container → Business Logic Container
Purpose: Routes user management, learning, content, and resource requests
Communication: HTTP API calls
Examples: User registration, progress tracking, content management
3. API Gateway Container → AI/ML Container
Purpose: Routes AI/ML requests (chat, RAG, YouTube transcript)
Communication: HTTP API calls
Examples: Chatbot messages, Islamic Q&A, video transcript processing
4. Business Logic Container → Database Container (Supabase)
Purpose: Stores and retrieves business data
Communication: Database connections
Examples: User profiles, learning progress, content metadata
5. AI/ML Container → OpenAI Container
Purpose: AI processing and content generation
Communication: HTTP API calls
Examples: GPT-4 responses, embeddings, text generation
6. AI/ML Container → Database Container (Supabase)
Purpose: Stores AI-generated content and vector embeddings
Communication: Database connections
Examples: RAG segments, chat history, processed transcripts
Key Benefits:
1. Single Entry Point
All client requests go through API Gateway
Centralized authentication and rate limiting
Simplified client-side code
2. Technology Specialization
React: Modern frontend development
Spring Boot: Enterprise-grade business logic
Django: Rich AI/ML ecosystem
Supabase: Managed database and storage
OpenAI: State-of-the-art AI services
3. Independent Scaling
Frontend: Scales with user load
API Gateway: Scales with request load
Business Logic: Scales with business operations
AI/ML: Scales with AI processing load
External Services: Scale independently
4. Clear Separation of Concerns
Frontend: User interface only
API Gateway: Request routing and security
Business Logic: Core business operations
AI/ML: Artificial intelligence services
External Services: Specialized external capabilities