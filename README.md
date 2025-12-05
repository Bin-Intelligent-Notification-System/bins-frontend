# BINS Front-End  
## *Bin Intelligent Notification System — Mobile Application*

<img width="200" height="400" alt="bins-frontend-snapshot" src="https://github.com/user-attachments/assets/58abcf70-8385-4d0e-b93b-e227dc77e9d8" />

## Description
The **BINS Front-End** is a React Native Expo application designed for real-time monitoring of waste-bin capacity across a smart campus environment.  
It consumes data from the BINS microservice backend and provides an intuitive, polished interface for facility staff to quickly identify which bins require attention.


## Features

### Real-Time Bin Monitoring
- Live status updates for each bin (Normal, Getting Full, Full/Overflowing)  
- Color-coded capacity cards (Green / Yellow / Red)  
- Percentage fill bars and last updated timestamps  

### Explore & Navigation
- Browse bins by building or category  
- Bottom tab navigation (Home / Explore)  
- Smooth and responsive UI  

### API Integration
- Axios with interceptors  
- TanStack Query for caching, background refresh and stale-time updates  
- Integration with Spring Boot microservices and remote PostgresSQL Database

### Modern UI/UX
- Clean dashboard layout  
- Icons for bin types (recycling, waste, compost)  
- Smooth scrolling, polished visuals  

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Framework** | React Native (Expo) |
| **State & Data** | TanStack Query, React Context |
| **Networking** | Axios | NGrok
| **Navigation** | React Navigation |

