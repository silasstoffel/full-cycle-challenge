FROM golang:alpine AS builder

WORKDIR /app

COPY main.go ./

ENV CGO_ENABLED=0

RUN go mod init github/silasstoffel/golang-app

RUN GOOS=linux go build -o goapp

FROM scratch

WORKDIR /app

COPY --from=builder /app .

CMD ["/app/goapp"]