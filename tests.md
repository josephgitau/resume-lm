# Manual Test Scenarios

## Authentication

### Account Creation
1. Navigate to the sign up page.
2. Enter a valid email and password.
3. Submit the form.
4. Verify your email if prompted.
**Expected:** A new user account is created and you are redirected to your dashboard.

### Third‑Party Login (GitHub)
1. Click the "Sign up with GitHub" or "Log in with GitHub" button.
2. Authorize ResumeLM in the GitHub OAuth screen.
3. Wait for the redirect back to the application.
**Expected:** The application creates (or uses an existing) account and logs you in.

### Account Login
1. Go to the login page.
2. Enter your email and password.
3. Submit.
**Expected:** You are authenticated and taken to the dashboard.

### Password Reset
1. On the login page, choose "Forgot password?".
2. Enter your registered email address.
3. Submit the request and check your inbox.
4. Follow the reset link and choose a new password.
5. Log in with the new password.
**Expected:** You can sign in with the new password and access your account.

## Resume‑Related AI Actions

### Fetching Resumes
1. Log in and open the resume dashboard.
2. Trigger a refresh of your resumes list.
**Expected:** Your saved resumes appear in the list.

### AI‑Assisted Resume Generation
1. Start the AI import or creation flow.
2. Provide resume text or a job description.
3. Submit the request.
**Expected:** The application generates or updates a resume using AI and displays the result.
