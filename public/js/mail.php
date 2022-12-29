<?php
    try{
        @$postdata = http_build_query(
            array(
                'email_data' => array(
                    "email" => $email,
                    "subject" => "Sally Hostels",
                    "message" => (
                        "
                            <h3>Reset Password</h3>
                            <div>
                                Follow this link to reset password: <a href = ''></a>
                            </div>
                        "
                    )
                )
            )
        );
        @$opts = array(
            'http' => array(
                'method' => 'POST',
                'header' => 'Content-type: application/x-www-form-urlencoded',
                'content' => $postdata
            )
        );
        @$context = stream_context_create($opts);
        @$result = file_get_contents('https://sally-hostels.000webhostapp.com/php/mail.php', false, $context);
    }
    catch(Exception $e){}
?>