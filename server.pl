use strict;
use warnings;
use HTTP::Server::Simple::CGI;

{
    package MyWebServer;
    use base qw(HTTP::Server::Simple::CGI);

    sub handle_request {
        my ($self, $cgi) = @_;

        my $path = $cgi->path_info();

        if ($path eq '/hello') {
            print "HTTP/1.0 200 OK\r\n";
            print "Content-type: text/plain\r\n\r\n";
            print "Hello, World!\n";
        } elsif ($path eq '/log') {
            my $method = $cgi->request_method();
            my $content = $cgi->param('content');

            print "HTTP/1.0 200 OK\r\n";
            print "Content-type: text/plain\r\n\r\n";
            print "Logged: $method - $content\n";
        } else {
            print "HTTP/1.0 404 Not Found\r\n";
            print "Content-type: text/plain\r\n\r\n";
            print "Not Found\n";
        }
    }
}

my $server = MyWebServer->new();
$server->run();
use strict;
use warnings;
use HTTP::Server::Simple::CGI;

{
    package MyWebServer;

    use base qw(HTTP::Server::Simple::CGI);

    sub handle_request {
        my ($self, $cgi) = @_;

        my $path = $cgi->path_info();

        if ($path eq '/hello') {
            print "HTTP/1.0 200 OK\r\n";
            print "Content-type: text/plain\r\n\r\n";
            print "Hello, World!\n";
        } else {
            print "HTTP/1.0 404 Not Found\r\n";
            print "Content-type: text/plain\r\n\r\n";
            print "404 Not Found\n";
        }
    }
}

my $server = MyWebServer->new();
$server->run();

# perl /c:/Users/jacki/dev/code-playground/server.pl
# perl server.pl

