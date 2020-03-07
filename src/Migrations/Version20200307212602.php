<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200307212602 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6496C8A81A9');
        $this->addSql('DROP INDEX IDX_8D93D6496C8A81A9 ON user');
        $this->addSql('ALTER TABLE user DROP products_id, DROP first_name, DROP last_name');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user ADD products_id INT DEFAULT NULL, ADD first_name VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, ADD last_name VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6496C8A81A9 FOREIGN KEY (products_id) REFERENCES mugs (id)');
        $this->addSql('CREATE INDEX IDX_8D93D6496C8A81A9 ON user (products_id)');
    }
}
