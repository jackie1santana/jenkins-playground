use actix_web::{get, post, web, App, HttpResponse, HttpServer};

#[get("/")]
async fn index() -> HttpResponse {
    HttpResponse::Ok().body("Hello, world!")
}

#[post("/data")]
async fn process_data(data: web::Json<String>) -> HttpResponse {
    // Process the data here
    HttpResponse::Ok().body(format!("Received data: {}", data))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Set up the server
    HttpServer::new(|| {
        App::new()
            .service(index)
            .service(process_data)
    })
    .bind("127.0.0.1:5500")?
    .run()
    .await
}
//cargo run
