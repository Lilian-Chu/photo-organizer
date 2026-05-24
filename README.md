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

### Folder structure
/photo-organizer
    /frontend
    /backend
        /app
        /services
        /models
        /pipelines
        /utils
    /data
    /scripts
    /tests

P.S. The *AI Photo Organizer* has an unofficial name: The **Photo Organizer To Access, Tag, Optimize, & Ease Storage**. Otherwise known as POTATOES. I understand *AI Photo Organizer* is the more professional name, but I find **POTATOES** a very charming name as well.
