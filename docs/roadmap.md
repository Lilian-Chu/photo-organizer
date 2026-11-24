# Phase 1: Core Cleanup MVP

**Duration: 2-3 weeks**

After the completion of this phase, the *AI Photo Organizer* will have the following features:
- Import photos
- Generate thumbnails
- Blur detection
- Duplicate detection
- Basic metadata extraction (latitude, longitude, city/country?)
- Review/delete UI

**GOAL:** Build a working local desktop/web application.

### Week 1:

**Day 1:**
- Setup React
- Setup SQLite
- Build image upload/import flow

**Day 2:**
- Generate thumbnails
- Implement metadata extraction
- Store metadata in SQLite

**Day 3:**
- Implement blur detection

**Day 4-5:**
- Implement duplicate detection

### Week 2:

**Day 1:**
- Build image upload/import UI

**Day 2:**
- Build review dashboard
- Add delete/review to dashboard

**Day 3-5:**
- Polish UI
- Improve UX

# Phase 2: Smart Organization

After the completion of this phase, the *AI Photo Organizer* will have the following features:
- Group by location metadata
- Cluster by timeline/trip
- Automatically create coherent albums
- Tag scenic landmarks

**GOAL:** Implement rudimentary photo organization based on photo metadata. 

# Phase 3: AI Search

After the completion of this phase, the *AI Photo Organizer* will have the following features:
- Search with NLP album prompts (eg. "Find beach sunset photos")
- Semantic search
- CLIP embeddings

**GOAL:** Implement AI-powered searches to create albums using information that cannot be captured using only metadata.