# Generated by Django 3.1.7 on 2021-03-23 08:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracking', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='trackingpoint',
            name='name',
            field=models.CharField(default='hello', max_length=500),
        ),
    ]
