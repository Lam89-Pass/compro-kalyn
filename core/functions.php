<?php
function getWhatsAppLink($layanan)
{
    $nomor_wa = "6285603103375";
    $pesan = "Halo SysExp404! Saya tertarik dengan jasa: *" . $layanan . "*\n\n";
    $pesan .= "Mohon informasi lebih lanjut mengenai prosedur dan estimasi harganya. Terima kasih!";

    return "https://api.whatsapp.com/send?phone=" . $nomor_wa . "&text=" . urlencode($pesan);
}
