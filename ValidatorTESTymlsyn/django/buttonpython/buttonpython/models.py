from django.db import models

class Document(models.Model):
    document = models.FileField(upload_to='/var/www/html/ValidatorTEST/django/buttonpython/media/userup/')