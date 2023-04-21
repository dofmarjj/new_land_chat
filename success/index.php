<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">

    <!-- Responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Meta -->
    <title>Congratulations!</title>
    <meta name="description" content="">

    <!-- ICONs: Favicon -->
    <link rel="icon" href="./img/icon/favicon.ico" type="image/x-icon">
    <link rel="icon" href="./img/icon/favicon.png" type="image/png" sizes="any">

    <?php if (isset($_GET['yp'])) : ?>
        <!-- Yandex.Metrika counter -->
        <script type="text/javascript" >
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(<?= $_GET['yp']; ?>, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
            });
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/<?= $_GET['yp']; ?>" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
    <?php endif; ?>

    <?php if ( isset($_GET['ttpixel'] ) ) : ?>
        <?php $ttpixel = $_GET['ttpixel']; ?>

        <script>
            (function() {
                var ta = document.createElement('script');
                ta.type = 'text/javascript';
                ta.async = true;
                ta.src = 'https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=<?= $ttpixel; ?>';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ta, s); })();
        </script>
    <?php endif; ?>

    <?php if ( isset($_GET['pixel'] ) ) : ?>
        <?php $pixel = $_GET['pixel']; ?>
        <!-- Facebook Pixel Code -->
        <script>
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '<?= $pixel; ?>');
            fbq('track', 'PageView');
            fbq('track', 'ViewContent');
        </script>
        <noscript>
            <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<?= $pixel; ?>&ev=PageView&noscript=1"/>
        </noscript>
        <!-- End Facebook Pixel Code -->
    <?php endif; ?>

    <?php if (isset($_GET['gpixel'])) : ?>
        <script async src="https://www.googletagmanager.com/gtag/js?id=<?= explode('/', $_GET['gpixel'])[0]; ?>"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '<?= $_GET['gpixel']; ?>');
        </script>
        <!-- Event snippet for Contact conversion page -->
        <script>
            gtag('event', 'conversion', {'send_to': '<?= $_GET['gpixel']; ?>'});
        </script>
    <?php endif; ?>

    <?php if (isset($_GET['bge'])) : ?>
        <script>
            window.bgdataLayer = window.bgdataLayer || [];
            function bge(){bgdataLayer.push(arguments);}
            bge('init', "<?= $_GET['bge']; ?>");
        </script>
        <script async src="https://api.imotech.video/ad/events.js?pixel_id=<?= $_GET['bge']; ?>"></script>
    <?php endif; ?>

    <!-- ICONs: Apple -->
    <meta name="apple-mobile-web-app-title" content="">
    <link rel="apple-touch-icon" href="./img/icon/apple-touch-icon.png">

    <!-- DNC Prefetch -->
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <link rel="dns-prefetch" href="https://cdn.jsdelivr.net/">

    <!-- CSS & Preload -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/style.css">

</head>
<body>
<div id="root">
    <section>

    </section>
    <section>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-sm-12 text-center">
                    <div class="wrapper">
                        <h1>Congratulations!</h1>
                        <p class="h5">
                            You have successfully registered.
                            <span></span>
                            Expect a call from your manager.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                <div class="col text-center py-5">
                    <img src="./img/payment/visa.png" width="40" alt="Visa">
                    <img src="./img/payment/mastercard.png" width="40" alt="MasterCard">
                </div>
            </div>
        </div>
    </section>
</div>
</body>
</html>
