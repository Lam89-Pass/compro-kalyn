<?php
require_once 'core/functions.php';
$projectName = "SysExp404";
?>
<!DOCTYPE html>
<html lang="id" class="scroll-smooth">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $projectName; ?> | Tech Experiment & Services</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style-custom.css">
</head>

<body class="bg-[#050505] text-white selection:bg-blue-500 selection:text-white">

    <?php
    include 'views/partials/navbar.php';
    include 'views/partials/beranda.php';
    include 'views/partials/tentang-kami.php';
    include 'views/partials/service.php';
    include 'views/partials/testimoni.php';
    include 'views/partials/faq.php';
    include 'views/partials/kontak.php';
    include 'views/partials/footer.php';
    ?>

    <div id="preloader" class="fixed inset-0 z-[9999] bg-[#080202] flex items-center justify-center transition-all duration-700">
        <div class="relative flex flex-col items-center">
            <div class="text-4xl font-black tracking-tighter mb-4 animate-pulse">
                SYSEXP<span class="text-red-600">404</span>
            </div>
            <div class="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
                <div id="preloader-bar" class="h-full bg-red-600 w-0 transition-all duration-500 ease-out"></div>
            </div>
        </div>
    </div>
    <div class="cursor-dot hidden md:block"></div>
    <div class="cursor-outline hidden md:block"></div>

    <script src="https://unpkg.com/lucide@latest"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/animation.js"></script>
</body>

</html>