# Generated by Django 3.1.7 on 2021-05-28 01:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracking', '0005_trackingpoint_assignment'),
    ]

    operations = [
        migrations.AddField(
            model_name='trackingpoint',
            name='dateTime',
            field=models.DateTimeField(auto_now=True),
        ),
    ]