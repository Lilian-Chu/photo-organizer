# AI Photo Organizer
An AI-powered, locally run photo organization assistant for personal travel libraries

## 🌟 Highlights
I have photos. A lot of photos. And many people I know also have way too many photos, their phone and PC libraries cluttered with tens or hundreds of gigabytes of barely-touched photos. It is a very daunting task to sort through thousands of photos to do something as simple as cleaning up duplicate or blurry photos, never mind sorting said photos into a sense of cohesion for a travel album.

The AI Photo Organizer seeks to streamline photo organization in an AI-powered, locally run organization assistant! As this program receives more functionality, it will have the following features:
 - Identify and delete duplicate and low quality photos
 - Organize photos by geographical location
 - Identify significant landmarks/scenery in photos
 - Create cohesive albums based on NLP prompts

This program is a work in progress and will continue to receive updates over time. 

## ✍️ Planning and Development
As stated above, this program is a work in progress. This section outlines my current architecture and structure for the program. Additionally, it will describe what phase I am currently working on. When this program leaves the MVP phase, I will likely delete this section.

**Current phase:** MVP Phase 1
- Import photos
- Generate thumbnails
- Blur detection
- Duplicate detection
- Review/delete UI

### Tech Stack
- React
- TypeScript
- FastAPI
- OpenCV
- ChromaDB
- SQLite

### Planned architecture
React Frontend
    ↓
FastAPI Backend
    ↓
Photo Processing Pipeline
1. EXIF extraction
2. Face detection
3. Blur detection
4. Duplicate detection
5. Landmark classification
6. Embedding generation
    ↓
SQLite + ChromaDB

## Roadmap

**Status: June 20, 2026**
The AI Photo Organizer is currently in **Phase 1: Core Cleanup MVP**

### Phase 1: Core Cleanup MVP

After the completion of this phase, the *AI Photo Organizer* will have the following features:
- Import photos
- Generate thumbnails
- Detect blurry/low quality photos
- Detect duplicate photos
- Extract basic metadata
- Offer review/delete UI

**GOAL:** Build a working local desktop/web application.

### Phase 2: Smart Organization

After the completion of this phase, the *AI Photo Organizer* will have the following features:
- Group by location metadata
- Cluster by timeline/trip
- Automatically create coherent albums
- Tag scenic landmarks

**GOAL:** Implement rudimentary photo organization based on photo metadata. 

### Phase 3: AI Search

After the completion of this phase, the *AI Photo Organizer* will have the following features:
- Search with NLP album prompts (eg. "Find beach sunset photos")
- Semantic search
- CLIP embeddings

**GOAL:** Implement AI-powered searches to create albums using information that cannot be captured using only metadata.

=====

**An important aside:** The *AI Photo Organizer* has an unofficial name: The **Photo Organizer To Access, Tag, Optimize, & Ease Storage**. Otherwise known as POTATOES. I understand *AI Photo Organizer* is the more professional name, but I find **POTATOES** a very charming name as well.
