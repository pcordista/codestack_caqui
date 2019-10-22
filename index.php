<?php
$file = basename($_SERVER['PHP_SELF']); // your file name 
$last_modified_time = filemtime($file);
$etag = md5_file($file);

header("Last-Modified: " . gmdate("D, d M Y H:i:s", $last_modified_time) . " GMT");
header("Etag: $etag");
?>

<?php include 'header.php'; ?>

<?php include 'components/home-top-header.php'; ?>

<?php include 'menu.php'; ?>

<?php include 'components/home-slider.php'; ?>

<?php include 'components/home-call-category.php'; ?>

<?php include 'components/divider.php'; ?>

<?php include 'components/home-carousel-best.php'; ?>

<?php include 'components/home-banner-promotion.php'; ?>

<?php include 'components/home-carousel-berco.php'; ?>

<?php include 'components/home-grid-berco.php'; ?>

<?php include 'components/home-carousel-categorias.php'; ?>

<?php include 'components/home-newsletter.php'; ?>

<?php include 'footer.php'; ?>



<?php include 'assets/js/JS_includes.php'; ?>
<script src="assets/devlop/live.js"></script>
<script>
  AOS.init();
</script>
</body>

</html>