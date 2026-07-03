<?php
declare(strict_types=1);

// ── Config ────────────────────────────────────────────────────────────────────
const RECIPIENT = 'info@raumfuerdich-impulse.de';
const SUBJECT   = 'Neue Nachricht über raumfuerdich-impulse.de';
const ORIGIN    = 'https://raumfuerdich-impulse.de';

// ── Only accept POST ──────────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /kontakt');
    exit;
}

// ── Honeypot check (spam protection) ─────────────────────────────────────────
if (!empty($_POST['bot-field'])) {
    header('Location: /kontakt?status=ok');
    exit;
}

// ── Sanitise & validate ───────────────────────────────────────────────────────
function clean(string $value): string {
    return htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
}

$name       = clean($_POST['name']       ?? '');
$email      = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$telefon    = clean($_POST['telefon']    ?? '');
$anliegen   = clean($_POST['anliegen']  ?? '');
$datenschutz = !empty($_POST['datenschutz']);

if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$anliegen || !$datenschutz) {
    header('Location: /kontakt?status=error');
    exit;
}

// ── Build email ───────────────────────────────────────────────────────────────
$body  = "Name:     {$name}\n";
$body .= "E-Mail:   {$email}\n";
if ($telefon) {
    $body .= "Telefon:  {$telefon}\n";
}
$body .= "\nNachricht:\n{$anliegen}\n";

$headers  = "From: Raum fuer dich <info@raumfuerdich-impulse.de>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// ── Send ──────────────────────────────────────────────────────────────────────
$sent = mail(RECIPIENT, SUBJECT, $body, $headers);

header('Location: /kontakt?status=' . ($sent ? 'ok' : 'error'));
exit;
