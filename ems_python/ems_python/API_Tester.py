
import requests

# Example API endpoint and data
api_url = "https://dummyjson.com/c/3029-d29f-4014-9fb4"  # Replace with your API URL

# Example of a GET request
def test_API():
    response = requests.get(api_url)
    
    print("GET Response Status Code:", response.status_code)
    
    # Check the content type of the response
    if response.headers.get('Content-Type') == 'application/json':
        try:
            # Try to parse the response as JSON
            print("GET Response JSON:", response.json())
        except requests.exceptions.JSONDecodeError:
            print("Failed to decode JSON response.")
    else:
        # If not JSON, print the raw response text
        print("GET Response Content:", response.text)


if __name__ == "__main__":
    test_API()
