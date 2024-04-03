#!/bin/bash

# Variables
APP_URL="http://localhost:31898"  # Update with your application's URL
NUM_REQUESTS=10000  # Number of HTTP requests to send
CONCURRENCY=10000  # Number of concurrent requests to send

# Function to send HTTP requests
send_requests() {
  for ((i=1; i<=$NUM_REQUESTS; i++)); do
    ab -n 1 -c $CONCURRENCY $APP_URL > /dev/null 2>&1 &
  done
  wait
}

# Main
echo "Sending $NUM_REQUESTS HTTP requests to $APP_URL with concurrency $CONCURRENCY..."
send_requests
echo "Requests completed."
