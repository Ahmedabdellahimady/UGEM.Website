document.getElementById('issueForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const problem = document.getElementById('problem').value;

    alert(`شكراً ${name}! تم إرسال مشكلتك بنجاح.`);
    
    // يمكن هنا إضافة منطق لإرسال البيانات إلى السيرفر
    this.reset();
});