export default function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'u18293u213983u192',
        username: 'Thomas'
      })
    }, 2000)
  });
}