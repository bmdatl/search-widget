import { Pipe, PipeTransform } from '@angular/core';

interface TemperatureOptions {
  precision?: number;
  unit?: string;
}

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, options?: TemperatureOptions): string {
    const precision = options?.precision || 1;
    const unit = options?.unit || 'C';

    let temperatureString = '';

    if (!value || isNaN(value)) {
      throw new Error('Temperature pipe requires a numeric value to be provided.');
    } else {
      if (unit === 'C') {
        temperatureString = value.toFixed(precision) + ' °C';
      } else if (unit === 'F') {
        temperatureString = value.toFixed(precision) + ' °F';
      }
    }

    return temperatureString;
  }

}
