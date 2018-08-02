curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"email":"uribaba3@yahoo.com","name":"That Guy","content":"Hey there. Just letting you know that the serverless function worked..."}' \
  https://qf1yocb7i9.execute-api.us-east-1.amazonaws.com/dev/email/send
