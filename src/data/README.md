# Work Portfolio Data Documentation

## Overview

This directory contains all portfolio project data for the Work page. The data is structured in JSON format for easy maintenance and updates.

## Work Categories

### 1. **All** (Default Filter)

- Shows all projects regardless of category
- Used as the initial filter state

### 2. **Branding**

- **Focus**: Logo design, brand guidelines, visual identity
- **Examples**: Company logos, brand systems, corporate identity
- **Tools**: Adobe Illustrator, Photoshop, Figma
- **Deliverables**: Logos, brand guidelines, business cards, letterhead

### 3. **Digital Marketing**

- **Focus**: Social media, digital ads, content creation
- **Examples**: Social media graphics, banner ads, email templates
- **Tools**: Adobe Creative Suite, Canva Pro
- **Deliverables**: Social media assets, digital advertisements, content calendars

### 4. **Print Design**

- **Focus**: Brochures, business cards, packaging materials
- **Examples**: Marketing collateral, product packaging, business materials
- **Tools**: Adobe InDesign, Illustrator, Photoshop
- **Deliverables**: Brochures, catalogs, business cards, packaging

### 5. **Digital Design**

- **Focus**: UI/UX, web graphics, digital assets
- **Examples**: Website graphics, user interface components, digital assets
- **Tools**: Figma, Adobe Creative Suite
- **Deliverables**: UI components, icon sets, style guides, digital assets

### 6. **Packaging**

- **Focus**: Product packaging, display materials
- **Examples**: Product boxes, retail packaging, installation guides
- **Tools**: Adobe Illustrator, InDesign, 3D mockup tools
- **Deliverables**: Primary/secondary packaging, display materials, guides

### 7. **Event Design**

- **Focus**: Event branding, promotional materials
- **Examples**: Conference branding, event collateral, promotional materials
- **Tools**: Adobe Creative Suite, Sketch, Figma
- **Deliverables**: Event logos, promotional materials, stage designs

## Data Structure

### Projects Array

Each project object contains:

#### Basic Information

- `id`: Unique project identifier
- `title`: Project name
- `category`: Project category (matches one of the categories above)
- `description`: Short project description
- `image`: Image path (placeholder for now)
- `tags`: Array of relevant tags
- `year`: Project completion year

#### Detailed Information

- `fullDescription`: Comprehensive project description
- `client`: Client name
- `duration`: Project timeline

#### Technical Details

- `tools`: Array of software/tools used
- `deliverables`: Array of final deliverables

#### Project Context

- `challenge`: The main problem/challenge addressed
- `solution`: How the challenge was solved

### Categories Array

- List of all available category filters
- Used for the category filter buttons
- "All" is always included as the default option

### Page Content

- `header`: Page title and description
- `callToAction`: CTA section content and button text

## Current Projects

1. **Brand Identity Design** (Branding, 2024)
2. **Marketing Campaign** (Digital Marketing, 2024)
3. **Print Design Collection** (Print Design, 2023)
4. **Web Graphics & UI** (Digital Design, 2023)
5. **Product Packaging** (Packaging, 2023)
6. **Event Branding** (Event Design, 2022)

## Maintenance

- **Adding Projects**: Add new project objects to the `projects` array
- **Updating Categories**: Modify the `categories` array and update project categories
- **Content Updates**: Modify `pageContent` for page-specific text changes
- **Image Paths**: Update image paths when actual project images are available

## File Location

- **Data File**: `src/data/workData.json`
- **Documentation**: `src/data/README.md`
- **Component**: `src/pages/Work.jsx`

Last updated: 2024
