<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\Event\Test;

use const PHP_EOL;
use function sprintf;
use PHPUnit\Event\Code;
use PHPUnit\Event\Event;
use PHPUnit\Event\Telemetry;

/**
 * @immutable
 *
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 */
final readonly class Skipped implements Event
{
    private Telemetry\Info $telemetryInfo;
    private Code\Test $test;
    private string $message;

    public function __construct(Telemetry\Info $telemetryInfo, Code\Test $test, string $message)
    {
        $this->telemetryInfo = $telemetryInfo;
        $this->test          = $test;
        $this->message       = $message;
    }

    public function telemetryInfo(): Telemetry\Info
    {
        return $this->telemetryInfo;
    }

    public function test(): Code\Test
    {
        return $this->test;
    }

    public function message(): string
    {
        return $this->message;
    }

    /**
     * @return non-empty-string
     */
    public function asString(): string
    {
        $message = $this->message;

        if ($message !== '') {
            $message = PHP_EOL . $message;
        }

        return sprintf(
            'Test Skipped (%s)%s',
            $this->test->id(),
            $message,
        );
    }
}
