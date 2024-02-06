function checkPhishing() {
const userInput = document.getElementById('websiteInput').value;
const phishingWebsites = [
'example-phishing.com',
'another-phishing.net',
// Add more phishing websites to the list
];

const isPhishing = phishingWebsites.includes(userInput);

const resultElement = document.getElementById('result');
if (isPhishing) {
resultElement.textContent = 'This website is a phishing site!';
resultElement.style.color = 'red';
} else {
resultElement.textContent = 'This website is genuine.';
resultElement.style.color 
= 'green';
}
}