# Fintech Dashboard

## Overview

This project implements a dashboard for a fintech application with features like user overview, loan management, transaction history, and responsive design. The dashboard fetches data from a mock REST API, allowing users to interact with their data, request loans, and view transaction history.

### Features:

1. **User Overview Section**  
   Displays basic user information including:

   - Name
   - Account balance
   - Recent transactions

2. **Loan Management Section**

   - View loan history and details of active loans.
   - Request new loans with input validation for:
     - Amount
     - Tenure
     - Purpose

3. **Transaction History Section**

   - Render a table showing recent transactions with the ability to:
     - Sort by date, amount, or transaction type
     - Filter by transaction type (credit/debit)

4. **Responsive Design**  
   The application is fully responsive and works seamlessly across desktop, tablet, and mobile devices.

## Technical Stack

- **Frontend Framework**: React(Vite) with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API (or Redux, if preferred)
- **API Integration**: Mock REST API (e.g., JSONPlaceholder or custom MockAPI)
- **Routing**: React Router for navigation between sections
<!-- - **Testing**: Jest and React Testing Library for unit tests -->

<!-- ## Setup Instructions

### 1. Clone the repository

```bash

``` -->
