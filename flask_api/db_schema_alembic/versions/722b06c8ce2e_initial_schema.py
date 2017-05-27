"""Initial_schema

Revision ID: 722b06c8ce2e
Revises: 
Create Date: 2017-04-18 00:01:34.407801

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '722b06c8ce2e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():

    op.create_table('users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('login', sa.String(length=255), nullable=False),
        sa.Column('first_name', sa.String(length=255), nullable=False),
        sa.Column('family_name', sa.String(length=255), nullable=False),
        sa.Column('email', sa.String(length=255), nullable=False),
        sa.Column('pwd_hash', sa.String(length=255), nullable=False),
        sa.Column('is_admin', sa.Boolean(), nullable=False),
        sa.Column('is_active', sa.Boolean(), nullable=False),
        sa.Column('created_at', sa.DateTime(), nullable=True),
        sa.Column('updated_at', sa.DateTime(), nullable=True),
        sa.Column('deactivated_at', sa.DateTime(), nullable=True),
        sa.Column('reactivated_at', sa.DateTime(), nullable=True),
        sa.Column('first_login_at', sa.DateTime(), nullable=True),
        sa.Column('last_login_at', sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )

    op.execute("""
        insert into users (id, login, email, first_name, family_name, pwd_hash, is_admin, is_active,created_at,updated_at,first_login_at,last_login_at)
        values(169, 'login169', 'user169@a.net', 'Adam','Anderson','pwd169', False, True ,'2017-02-24 10:01:05.88313','2017-02-26 10:01:01.88313','2017-02-24 10:01:05.88313','2017-02-27 10:01:05.88313');
        
        insert into users (id, login, email, first_name, family_name, pwd_hash, is_admin, is_active, created_at,updated_at,first_login_at,last_login_at)
        values(221, 'login221', 'user221@a.net', 'John','Smith','pwd221', True, True,'2016-02-24 10:01:05.88313','2016-02-26 10:01:01.88313','2016-02-24 10:01:05.88313','2016-02-27 10:01:05.88313');

    """)

def downgrade():
    pass
