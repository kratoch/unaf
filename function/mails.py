from django.core.mail import send_mail, EmailMultiAlternatives
from django.conf import settings
from django.template.loader import get_template
from unaf import settings


def admin_consult_mail(consult, person):
    subject = 'Sistema de stock Unaf - Nueva consulta realizada por ' + str(person.user.get_full_name())
    message = consult
    emailFrom = settings.EMAIL_HOST_USER
    recipientList = ['claudiokratoch@gmail.com']
    send_mail(subject, message, emailFrom, recipientList, fail_silently=False)

def segment_mail(type, segment):
    global message
    subject = 'ClaBel - Nuevo segmento agregado'
    if type == 1:
        message = 'Se ha agregado un nuevo segmento 1 ' + str(segment) + ' siga el siguiente enlace para modificarlo ' \
                                                                         'http://127.0.0.2:8000/admin/segments/city/' \
                                                                         '' + str(segment.id) + ''
    elif type == 2:
        message = 'Se ha agregado un nuevo segmento 1 ' + str(segment) + ' siga el siguiente enlace para modificarlo ' \
                                                                         'http://127.0.0.2:8000/admin/segments/city/' \
                                                                         '' + str(segment.id) + ''
    emailFrom = 'claudiokratoch@gmail.com'
    recipientList = ['claudiokratoch@hotmail.com']
    send_mail(subject, message, emailFrom, recipientList, fail_silently=False)


def admin_consult_mail2(consult, person):
    template = get_template('admin_consult_mail.html')
    content = template.render({'consult': consult, 'person': person})
    emailFrom = settings.EMAIL_HOST_USER
    email = EmailMultiAlternatives(
        'Unaf - Consulta',
        'Unaf - Consulta',
        emailFrom,
        ['claudiokratoch@gmail.com']
        #['claudiokratoch@gmail.com', 'mbelengarcia.1992@gmail.com']

    )
    email.attach_alternative(content, 'text/html')
    email.send()
